import axios from "axios";
const SERVER_URL = "http://localhost:9000";

export const getItems = () => {
  const url = `${SERVER_URL}/items`;
  return axios.get(url);
};
export const getGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url);
};
export const getChefCards = () => {
  const url = `${SERVER_URL}/employees`;
  return axios.get(url);
};
export const setItemInMenu = (item) => {
  const url = `${SERVER_URL}/items`;
  return axios.post(url, item);
};
export const updateItem=(item,itemId)=>{
    const url=`${SERVER_URL}/items/${itemId}`
    return axios.put(url,item)
}
export const deleteItem=(itemId)=>{
  const url=`${SERVER_URL}/items/${itemId}`
  return axios.delete(url,itemId)
}