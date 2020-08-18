import { expect } from "chai";
import CometChat from "../src";

describe("User Roles", () => {
  let chat: CometChat;
  let role: string;

  before((done) => {
    // please don't abuse these keys
    chat = new CometChat(process.env.API_KEY, process.env.APP_ID, "us");
    done();
  });

  it("should list 1 role", (done) => {
    chat
      .listRoles()
      .then((r) => {
        expect(r.data.length).equal(1);
        done();
      })
      .catch(done);
  }).timeout(15000);
  it("should contain the default role", (done) => {
    chat
      .listRoles()
      .then((r) => {
        expect(r.data[0].role).equal("default");
        done();
      })
      .catch(done);
  }).timeout(15000);
  it("should create new role", (done) => {
    chat
      .createRole({ name: "Admin Role", role: "adminrole" })
      .then((r) => {
        role = r.role;
        expect(r.role).equal("adminrole");
        done();
      })
      .catch(done);
  }).timeout(15000);
  it("should update role", (done) => {
    chat
      .updateRole(role, { name: "Admin Role New" })
      .then((r) => {
        expect(r.name).equal("Admin Role New");
        done();
      })
      .catch(done);
  }).timeout(15000);
  it("should get details of a role", (done) => {
    chat
      .getRole(role)
      .then((r) => {
        expect(r.role).equal(role);
        done();
      })
      .catch(done);
  }).timeout(15000);
  it("should delete a role", (done) => {
    chat
      .deleteRole(role)
      .then((r) => {
        done();
      })
      .catch(done);
  }).timeout(15000);
});
