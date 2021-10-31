const axios = require("axios");
const { response } = require("express");

const dataCandidates = {};

const getUsersBySubject = async (req, res) => {
  const subject = req.params.subject;
  const response = await axios
    .post(
      `https://search.torre.co/people/_search?currency=USD%24&periodicity=hourly&lang=es&size=20&aggregate=true`,
      {
        "skill/role": {
          text: `${subject}`,
          proficiency: "proficient",
        },
      }
    )
    .then((responseData) => {
      res.send(responseData.data);
    })
    .catch((err) => console.log(err));
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await axios
    .get(`https://torre.bio/api/bios/${id}`)
    .then((responseData) => {
      res.send(responseData.data);
    })
    .catch((err) => console.log(err));
};

const getOpportunityById = async (req, res) => {
  const id = req.params.id;
  const response = await axios
    .get(`https://torre.co/api/suite/opportunities/${id}`)
    .then((responseData) => {
      filterDataJson(responseData);
      res.send(responseData.data);
    })
    .catch((err) => console.log(err));
};

const filterDataJson = (json) => {
  json.data.members.map((p) => {
    console.log(p);
  });
};
module.exports = {
  getUserById,
  getOpportunityById,
  getUsersBySubject,
};
