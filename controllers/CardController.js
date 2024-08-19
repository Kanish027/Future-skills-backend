import Card from "../models/Card.js";

const CreateCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({
      title,
      description,
    });
    await card.save();
    res.status(201).json({
      success: true,
      message: "Card Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

const GetAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json({
      success: true,
      cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Message",
    });
  }
};

const GetSpecificCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.find({ _id: id });
    res.status(200).json({
      success: true,
      card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Message",
    });
  }
};

export { CreateCard, GetAllCards, GetSpecificCard };
