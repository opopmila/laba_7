try {
    res.status(200).json({ success: true, user, ability: req.ability} )
    } catch (error) {
    res.status(401).json({ success: false, message: error.message });
    }
  
  router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          return res
            .status(400)
            .json({ email: "Адрес электронной почты уже существует" });
        } else {
          try {
            const newUser = new User({
              email: req.body.email,
              name: req.body.name,
              surname: req.body.surname,
              thirdname: req.body.thirdname,
            });
  
  
            res.status().json({ newUser, success: true });
  
  
         
          } catch (error) {
            return res.status(400).json({ success: false, messege: error });
          }
        }
      })
      .catch((error) => {
        return res.status(400).json({ success: false, messege: error });
      });
  });