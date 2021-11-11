import popController from "../../../app/controllers/pop.controller";
import Queue from "../../../app/services/queue.service";

describe("Test Pop Controller", () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.sendStatus = jest.fn().mockReturnValue(res);
    return res;
  };
  const res = mockResponse();
  test("should return empty array", async () => {
    jest.spyOn(Queue, "shift").mockReturnValue("");
    await popController.delete(null, res, null);
    expect(res.json).toBeCalledWith([]);
    expect(res.status).toBeCalledWith(204);
  });

  test("should return items array", async () => {
    const responseMock = {
      message: "Item removed successfully",
      data: {
        first_name: "Edythe",
        last_name: "Rempel",
        timestamp: "2021-11-10T21:45:17.7148339Z",
        sip: "https://127.0.0.1:33213/e0d47f6c-4651-44b7-8232-7da11a25f4cc",
        city: "OReillymouth",
        state: "IA",
        phone_number: "8411064176",
        priority: 45,
      },
    };

    const callMock = {
      first_name: "Edythe",
      last_name: "Rempel",
      timestamp: "2021-11-10T21:45:17.7148339Z",
      sip: "https://127.0.0.1:33213/e0d47f6c-4651-44b7-8232-7da11a25f4cc",
      city: "OReillymouth",
      state: "IA",
      phone_number: "8411064176",
      priority: 45,
    };
    jest.spyOn(Queue, "shift").mockReturnValue(callMock);
    await popController.delete(null, res, null);
    expect(res.json).toBeCalledWith(responseMock);
    expect(res.status).toBeCalledWith(202);
  });

  test("should return an error when delete an item", async () => {
    const next = jest.fn();
    jest.spyOn(Queue, "shift").mockImplementation(() => {
      throw new Error();
    });
    await popController.delete(null, res, next);
    expect(res.sendStatus).toHaveBeenCalled();
  });
});
