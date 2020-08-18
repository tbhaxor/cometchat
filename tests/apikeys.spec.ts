import { expect } from "chai";
import CometChat from "../src";

describe("API Keys", () => {
  let chat: CometChat;
  let api: string;

  before((done) => {
    // please don't abuse these keys
    chat = new CometChat(process.env.API_KEY, process.env.APP_ID, "us");
    done();
  });

  it("should list 2 keys", (done) => {
    chat
      .listApiKeys()
      .then((r) => {
        expect(r.data.length).equal(2);
        done();
      })
      .catch(done);
  }).timeout(15000);

  it("should contain the current api key", (done) => {
    chat
      .listApiKeys()
      .then((r) => {
        expect(
          r.data.filter((v) => v.apiKey == process.env.API_KEY).length
        ).equal(1);
        done();
      })
      .catch(done);
  }).timeout(15000);

  it("should create new api key", (done) => {
    chat
      .createApiKey({ name: "LOL TEST KEY", scope: "fullAccess" })
      .then((r) => {
        api = r.apiKey;
        expect(r.name).equal("LOL TEST KEY");
        done();
      })
      .catch(done);
  }).timeout(15000);

  it("should update new api key", (done) => {
    chat
      .updateApiKey(api, { name: "NEW NAME", scope: "fullAccess" })
      .then((r) => {
        expect(r.name).equal("NEW NAME");
        done();
      })
      .catch(done);
  }).timeout(15000);

  it("should get the api key details", (done) => {
    chat.getApiKey(api).then((r) => {
      expect(r.apiKey).equal(api);
      done();
    });
  }).timeout(15000);

  it("should delete the api key", (done) => {
    chat
      .deleteApiKey(api)
      .then(() => {
        done();
      })
      .catch(done);
  }).timeout(15000);
});
