const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
res.json (
    [
  {
    "id": 1,
    "question": "What is money?",
    "choices": [
      "A piece of paper",
      "Something you buy toys with",
      "Something you earn for doing chores",
      "All of the above"
    ],
    "answer": 4
  },
  {
    "id": 2,
    "question": "What do you use to pay for things?",
    "choices": [
      "Credit card",
      "Cash",
      "Checks",
      "All of the above"
    ],
    "answer": 4
  },
  {
    "id": 3,
    "question": "What does 'saving money' mean?",
    "choices": [
      "Spending money on toys",
      "Putting money aside for later",
      "Giving money to friends",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 4,
    "question": "What is a budget?",
    "choices": [
      "A plan for spending and saving money",
      "A type of shoe",
      "A fancy word for shopping",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 5,
    "question": "What is interest?",
    "choices": [
      "Money you earn from saving",
      "Money you pay for borrowing",
      "Money you get on your birthday",
      "Money you find on the ground"
    ],
    "answer": 1
  },
  {
    "id": 6,
    "question": "What is a bank?",
    "choices": [
      "A place where you can save money",
      "A place where you can buy toys",
      "A type of store",
      "All of the above"
    ],
    "answer": 1
  },
  {
    "id": 7,
    "question": "What is a loan?",
    "choices": [
      "Money you borrow and pay back later",
      "Money you give to a friend",
      "Money you find on the street",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 8,
    "question": "What is a credit card?",
    "choices": [
      "A card you use to buy things with money you have",
      "A card you use to borrow money and pay it back later",
      "A card you use to get discounts",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 9,
    "question": "What is a paycheck?",
    "choices": [
      "Money you get for doing chores",
      "Money you get for working",
      "Money you get for saving",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 10,
    "question": "What is an expense?",
    "choices": [
      "Money you earn",
      "Money you spend",
      "Money you save",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 11,
    "question": "What is a sale?",
    "choices": [
      "A store closing down",
      "A discount on items",
      "A type of toy",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 12,
    "question": "What is a mortgage?",
    "choices": [
      "A type of loan to buy a house",
      "A type of rent",
      "A type of insurance",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 13,
    "question": "What is inflation?",
    "choices": [
      "A decrease in prices",
      "An increase in prices",
      "A type of food",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 14,
    "question": "What is a piggy bank?",
    "choices": [
      "A bank for pigs",
      "A container for saving coins",
      "A type of toy",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 15,
    "question": "What is a stock?",
    "choices": [
      "A type of soup",
      "A share in a company",
      "A type of store",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 16,
    "question": "What is a dividend?",
    "choices": [
      "A type of math problem",
      "A portion of a company's profit given to shareholders",
      "A type of sandwich",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 17,
    "question": "What is a credit score?",
    "choices": [
      "A score you get in school for learning about money",
      "A score that shows how good you are at saving",
      "A score that shows how likely you are to pay back borrowed money",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "question": "What is a bill?",
    "choices": [
      "A type of money",
      "A list of things you need to do",
      "A request for payment",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 19,
    "question": "What is a debit card?",
    "choices": [
      "A card you use to buy things with money you have",
      "A card you use to borrow money",
      "A card you use to get discounts",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 20,
    "question": "What is a check?",
    "choices": [
      "A mark you make on a paper",
      "A type of money",
      "A written order to a bank to pay a specific amount of money to a person or organization",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 21,
    "question": "What is a profit?",
    "choices": [
      "Money you lose",
      "Money you earn",
      "Money you spend",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 22,
    "question": "What is a loss?",
    "choices": [
      "Money you earn",
      "Money you spend",
      "Money you lose",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 23,
    "question": "What is a charity?",
    "choices": [
      "A type of store",
      "A place where you buy toys",
      "An organization that helps people in need",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 24,
    "question": "What is a donation?",
    "choices": [
      "Money you earn",
      "Money you spend",
      "Money you give to help others",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 25,
    "question": "What is a purchase?",
    "choices": [
      "Buying something",
      "Selling something",
      "Borrowing something",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 26,
    "question": "What is a customer?",
    "choices": [
      "A person who sells things",
      "A person who buys things",
      "A person who saves money",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 27,
    "question": "What is a seller?",
    "choices": [
      "A person who buys things",
      "A person who sells things",
      "A person who saves money",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 28,
    "question": "What is a product?",
    "choices": [
      "Something you buy",
      "Something you sell",
      "Something you make or provide",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 29,
    "question": "What is a service?",
    "choices": [
      "Something you buy",
      "Something you sell",
      "Something you do for others",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 30,
    "question": "What is a tax?",
    "choices": [
      "Money you earn",
      "Money you spend",
      "Money you give to the government",
      "None of the above"
    ],
    "answer": 3
  },
  {
    "id": 31,
    "question": "What is a financial goal?",
    "choices": [
      "A plan for saving money",
      "A plan for spending money",
      "A plan for giving money away",
      "All of the above"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "question": "What is a loan interest rate?",
    "choices": [
      "The amount of money borrowed",
      "The percentage of the loan amount charged for borrowing",
      "The number of months you have to pay back the loan",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 33,
    "question": "What is a stock market?",
    "choices": [
      "A market where you can buy fruits and vegetables",
      "A market where you can buy and sell shares of companies",
      "A market where you can buy and sell cars",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 34,
    "question": "What is a mutual fund?",
    "choices": [
      "A fund set up by a group of people who pool their money together to buy stocks, bonds, or other assets",
      "A fund set up by the government",
      "A fund set up by a bank",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 35,
    "question": "What is a bond?",
    "choices": [
      "A type of shoe",
      "A type of loan",
      "A type of candy",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 36,
    "question": "What is compound interest?",
    "choices": [
      "Interest that is added to the principal amount of a loan or deposit, so that the interest itself also earns interest",
      "Interest that is paid only once",
      "Interest that is paid monthly",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 37,
    "question": "What is a recession?",
    "choices": [
      "A period of economic growth",
      "A period of economic decline",
      "A period of stable economic conditions",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 38,
    "question": "What is a budget deficit?",
    "choices": [
      "When a government spends more money than it collects in revenue",
      "When a government spends less money than it collects in revenue",
      "When a government spends the same amount of money that it collects in revenue",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "question": "What is a budget surplus?",
    "choices": [
      "When a government spends more money than it collects in revenue",
      "When a government spends less money than it collects in revenue",
      "When a government spends the same amount of money that it collects in revenue",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 40,
    "question": "What is diversification?",
    "choices": [
      "Putting all your money in one investment",
      "Spreading your investments across different assets to reduce risk",
      "Putting all your money in a savings account",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 41,
    "question": "What is liquidity?",
    "choices": [
      "The ability to buy and sell assets quickly and easily without causing a significant change in the asset's price",
      "The ability to borrow money",
      "The ability to earn interest",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 42,
    "question": "What is a mortgage payment?",
    "choices": [
      "A payment to buy a car",
      "A payment to buy a house",
      "A payment to buy groceries",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 43,
    "question": "What is a collateral?",
    "choices": [
      "Something pledged as security for repayment of a loan",
      "A type of investment",
      "A type of insurance",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 44,
    "question": "What is bankruptcy?",
    "choices": [
      "A legal process for dealing with debt problems",
      "A legal process for dealing with investment problems",
      "A legal process for dealing with insurance problems",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 45,
    "question": "What is a credit report?",
    "choices": [
      "A report card for school",
      "A report that shows a person's credit history and current credit situation",
      "A report that shows a person's savings account balance",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 46,
    "question": "What is an ATM?",
    "choices": [
      "Automatic Transaction Machine",
      "Automatic Teller Machine",
      "Automatic Transfer Machine",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 47,
    "question": "What is a financial institution?",
    "choices": [
      "A place where you buy toys",
      "A place where you save or borrow money",
      "A place where you buy groceries",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 48,
    "question": "What is a certificate of deposit (CD)?",
    "choices": [
      "A document that proves you own a car",
      "A type of investment where you deposit money for a specific period of time and earn interest",
      "A type of insurance",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 49,
    "question": "What is a personal finance?",
    "choices": [
      "A plan for spending money",
      "A plan for saving money",
      "A plan for managing your money",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "id": 50,
    "question": "What is a credit union?",
    "choices": [
      "A financial institution owned by its members and operated for their mutual benefit",
      "A government agency",
      "A type of store",
      "None of the above"
    ],
    "answer": 1
  }
])
})

module.exports = router