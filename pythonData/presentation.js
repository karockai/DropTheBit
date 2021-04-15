playerInfo['ask'][strReqPrice] = strReqVol;
let askList = JSON.parse(await dbget('askList'));
askList[strReqPrice] = {};
askList[strReqPrice][socketID] = roomID;
dbset('askList', JSON.stringify(askList));


