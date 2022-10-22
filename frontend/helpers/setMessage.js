import axios from 'axios';

export async function setMessage(email, fName, lName, text) {
  try {
    const { data } = await axios.post(`https://cms.dendels.com/messages`, {
      email,
      fName,
      lName,
      text,
    });

    return data;
  } catch (e) {}
}
