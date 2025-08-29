const { processData } = require("../utils/helpers");


const FULL_NAME = "rapuru_hithesh_reddy"; 
const DOB = "27082005";                   
const EMAIL = "hithesh.22bce7443@vitapstudent.ac.in";
const ROLL_NUMBER = "22BCE7443";

exports.handleBFHL = (req, res) => {
  try {
    const { data } = req.body;

    // Input validation
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input: 'data' must be an array"
      });
    }

    // Process the data
    const result = processData(data);

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      ...result
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({
      is_success: false,
      message: "Internal Server Error"
    });
  }
};
