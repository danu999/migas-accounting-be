//GET ALL DATA
const getallData = (req, res) => {
  const data = [
    {
      id: 1,
      no: "G-0001",
      date: "01-12-2020",
      description: "General Journal",
      value: "5.000.000",
    },
    {
      id: 2,
      no: "G-0002",
      date: "05-12-2020",
      description: "General Journal",
      value: "6.000.000",
    },
    {
      id: 3,
      no: "G-0003",
      date: "08-12-2020",
      description: "General Journal",
      value: "7.000.000",
    },
    {
      id: 4,
      no: "G-0004",
      date: "08-12-2020",
      description: "General Journal",
      value: "8.000.000",
    },
    {
      id: 5,
      no: "G-0005",
      date: "08-12-2020",
      description: "General Journal",
      value: "9.000.000",
    },
    {
      id: 6,
      no: "G-0006",
      date: "08-12-2020",
      description: "General Journal",
      value: "10.000.000",
    },
    {
      id: 7,
      no: "G-0007",
      date: "08-12-2020",
      description: "General Journal",
      value: "11.000.000",
    },
    {
      id: 8,
      no: "G-0008",
      date: "08-12-2020",
      description: "General Journal",
      value: "12.000.000",
    },
    {
      id: 9,
      no: "G-0009",
      date: "08-12-2020",
      description: "General Journal",
      value: "13.000.000",
    },
    {
      id: 10,
      no: "G-0010",
      date: "08-12-2020",
      description: "General Journal",
      value: "14.000.000",
    },
  ];
  res.json(data)
};

module.exports = {
  getallData,
};
