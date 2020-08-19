/* 
  Service Layer for API Calls

  Author : Ramchand.B.R
*/


export const API = {
    get: async url => {
        let result = await fetch(url);
        let json = result.json();

        return json;
    }
};