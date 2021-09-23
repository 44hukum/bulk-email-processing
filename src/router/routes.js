const { Router } = require("express");
const { create_user, validate_user } = require("../controller/user_controller");
const { process_emails } = require("../controller/email_processing_controller");
const multer = require("multer");

const storage = multer.diskStorage({
  //store excel file
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffx = Date.now() + "-" + Math.round(Math.random() * 1e9); //filename
    cb(null, "email-" + file.fieldname + "-" + uniqueSuffx + ".xlsx");
  },
});

const upload = multer({ storage: storage });

let router = Router();

router.get("/", (req, resp, next) => {
  resp.render("dashboard");
});
router.post("/login", validate_user); //for login
router.post("/signup", create_user); //for signup
router.post("/email", upload.any("emails"), process_emails);

module.exports = router;
