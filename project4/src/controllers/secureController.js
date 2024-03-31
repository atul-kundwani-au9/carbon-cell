

exports.secureEndpoint = (req, res) => {
    res.json({ message: 'This is a secure endpoint', user: req.user });
  };
  