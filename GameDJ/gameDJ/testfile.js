import datas from "./dummy/dummyDatas4.js";
const stockData = datas;
import { dbset, dbget } from "./redis.js";

class Test {
  constructor(io, socket) {
    // Basic Setting --------------- >>
    this.io = io;
    this.socket = socket;
    this.myCash = 100000;
    // Basic Setting --------------- <<
  }

  async testComment(comment) {
    console.log(comment);
  }

  async refresh(data) {
    const { socket } = this;
    console.log(socket.id, "님의 자산이 갱신되었습니다.");
    socket.emit("testAsset", {
      cash: data.cash,
      asset: data.asset,
    });
  }
  
  async testSendChart(day) {
    const { socket } = this;
    socket.emit("chart", stockData[day]);
    console.log(socket.id, "님에게 [", day, "] 인덱스의 정보가 보내졌습니다.");
  }

  async testBuy(data) {
    const { socket } = this;
    console.log(
      socket.id,
      "님의 [ 가격",
      data.currentBid,
      ", 갯수",
      data.currentVolume,
      "] 매수 주문이 체결되었습니다."
    );
    socket.emit("testBuy", 3000);
    this.refresh({
      cash: data.currentBid * data.currentVolume,
      asset: data.currentBid,
    });
  }

  async testSell(data) {
    const { socket } = this;
    console.log(
      socket.id,
      "님의 [ 가격",
      data.currentBid,
      ", 갯수",
      data.currentVolume,
      "] 매도 주문이 체결되었습니다."
    );
    socket.emit("testSell", 1000000);
    this.refresh({
      cash: data.currentBid * data.currentVolume,
      asset: data.currentBid,
    });
  }
}

export default Test;
