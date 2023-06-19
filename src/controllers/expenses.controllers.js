const User = require("../models/user.model").User;
const {Expenses} = require('../models/expenses.model')
const AsyncManager = require("../utils/asyncManager");
const LibraryError = require("../utils/libraryError");



exports.addExpenses = AsyncManager(async function (req, res,next) {
    try {
    const data = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: `No user with id ${req.params.id}` });
    }

    const details = {
      user_id:user.id,
      date: data.date,
      amount: data.amount,
      operator: data.operator,
      driver: data.driver,
      details: data.details,
    };

    const expenses = await Expenses.create(details);
    return res.status(201).json({message:"Expenses added successfully",expenses});
    
    } catch (error) {
      
      // return res.status(500).json({message:"an error occurred"})
      return next(new LibraryError(error.message, 404));
    }
  
  }
);

exports.getExpenses = async function (req, res) {
    try {
      const user = User.findById(req.params.id);
      if (!user) {
        return res
          .status(404)
          .json({ message: `User with id ${req.params.id} not found` });
      }
      const expenses = await Expenses.find({ user_id: req.params.id });
      return res.status(200).json(expenses);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "An Error Occured" });
    }
  };