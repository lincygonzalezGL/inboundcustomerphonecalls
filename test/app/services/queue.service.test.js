import Queue from "../../../app/services/queue.service";

describe("Test Queue Services", () => {
  const queueMock = [
    {
      first_name: "Hope",
      last_name: "Lynch",
      timestamp: "2021-11-11T19:52:02.035538Z",
      sip: "https://127.0.0.1:33213/42f1caad-7aca-4eed-b7ec-311b36177627",
      city: "West Runte",
      state: "WY",
      phone_number: "1616189869",
      priority: 75,
    },
    {
      first_name: "Marlin",
      last_name: "Morar",
      timestamp: "2021-11-11T19:52:41.9644179Z",
      sip: "https://127.0.0.1:33213/56923ede-5a13-4c10-9a6f-de8cc3361411",
      city: "Sanfordtown",
      state: "CA",
      phone_number: "5307837897",
      priority: 6,
    },
    {
      first_name: "Adolf",
      last_name: "Thiel",
      timestamp: "2021-11-11T19:52:11.9989346Z",
      sip: "https://127.0.0.1:33213/820b7b68-d93c-4518-8bba-48ba1fa90e4c",
      city: "Bertmouth",
      state: "NH",
      phone_number: "4897390189",
      priority: 28,
    },
  ];

  test("should return the highest priority item", async () => {
    Queue.push(queueMock[0]);
    Queue.push(queueMock[1]);
    Queue.push(queueMock[2]);
    const spy = Queue.shift();
    expect(spy).toStrictEqual({
      first_name: "Hope",
      last_name: "Lynch",
      timestamp: "2021-11-11T19:52:02.035538Z",
      sip: "https://127.0.0.1:33213/42f1caad-7aca-4eed-b7ec-311b36177627",
      city: "West Runte",
      state: "WY",
      phone_number: "1616189869",
      priority: 75,
    });
  });
});
