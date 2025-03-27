exports.getProfile = (req, res) => {
    res.status(200).json({
      status: 'success',
      data: { id: 1, name: "Test User" }
    });
  };