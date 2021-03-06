# == Schema Information
#
# Table name: bills
#
#  id                        :integer          not null, primary key
#  total_bill_amount         :float            not null
#  amount_originally_owed    :float            not null
#  owing_at_creation_user_id :integer          not null
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#

class Bill < ApplicationRecord
  validates :total_bill_amount, numericality: { less_than_or_equal_to: 999999999, greater_than: 0 }

  validates_numericality_of :amount_originally_owed
  validates_numericality_of :total_bill_amount
  validate :total_bill_amount_is_greater

  def total_bill_amount_is_greater
      self.errors[:base] << "The amount owed on the bill must be less than or equal to the total bill amount." unless total_bill_amount.to_f >= amount_originally_owed.to_f
  end

  has_many :payments

  belongs_to :owing_at_creation_user,
    class_name: 'User',
    foreign_key: :owing_at_creation_user_id

  belongs_to :owed_to_at_creation_user,
    class_name: 'User',
    foreign_key: :owed_to_at_creation_user_id

  def users
    return [self.owing_at_creation_user, self.owed_to_at_creation_user]
  end

  def other_user(current_user)
    #
    (self.users.select {|user| user != current_user } )[0]
  end

  def balance
    #returns current balance always to the owing_at_creation user
    #so if it returns a negative number, it means the only user is currently owing the balance
    return_balance = self.amount_originally_owed
    self.payments.each do |payment|
      if payment.paying_user_id === self.owing_at_creation_user_id
        return_balance -= payment.payment_amount
      else
        return_balance += payment.payment_amount
      end
    end
    return return_balance
  end

  def owing_user
    if self.balance > 0
      return User.find(self.owing_at_creation_user_id)
    else
      return User.find(self.owed_to_at_creation_user_id)
    end
  end

  def owed_to_user
    if self.balance > 0
      return User.find(self.owed_to_at_creation_user_id)
    else
      return User.find(self.owing_at_creation_user_id)
    end
  end

end
