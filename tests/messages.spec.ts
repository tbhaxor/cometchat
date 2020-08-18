import { expect } from "chai";
import CometChat from "../src";

describe("Chat Messages", () => {
  let chat: CometChat;

  before((done) => {
    // please don't abuse these keys
    chat = new CometChat(process.env.API_KEY, process.env.APP_ID, "us");
    done();
  });

  it("should list 0 messages", (done) => {
    chat
      .listMessages()
      .then((r) => {
        expect(r.data.length).equal(0);
        done();
      })
      .catch(done);
  }).timeout(15000);

  it("should list delete messages", (done) => {
    chat.listMessages().then((r) => {
      if (r.data.length != 0) {
        chat
          .deleteMessage(r.data[0].id, true)
          .then(() => done())
          .catch(done);
      } else {
        done();
      }
    });
  }).timeout(15000);

  it("should list 10 messages", (done) => {
    chat
      .listMessages({ limit: 10 })
      .then((r) => {
        // @ts-ignore
        expect(r.meta.current.limit).equal(10);
        done();
      })
      .catch(done);
  }).timeout(15000);
});
