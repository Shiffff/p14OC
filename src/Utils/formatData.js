import { abbreviation } from "./Data";

export class Formater {
  static formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month.toString().padStart(2, "0")}/${day
      .toString()
      .padStart(2, "0")}/${year}`;
  }
  static inputRegexp(data, id) {
    if (data.length) {
      if (id === "firstName" || id === "lastName" || id === "city") {
        const regex = /^[A-Za-z\s,-]+$/;
        const isValid = regex.test(data);
        return isValid;
      } else if (id === "street") {
        const regex = /^[A-Za-z0-9\s,]+$/;
        const isValid = regex.test(data);
        return isValid;
      } else if (id === "zipCode") {
        const regex = /^[0-9]+$/;
        const isValid = regex.test(data);
        return isValid;
      }
    }
  }
  static abbreviationChoice(city) {
    let cityAbbreviation = null;
    for (let i = 0; i < abbreviation.length; i++) {
      if (abbreviation[i].name === city) {
        cityAbbreviation = abbreviation[i].abbreviation;
        break;
      }
    }
    return cityAbbreviation;
  }
}
