import Queue from "../services/queue.service";

const popController = {};

popController.delete = (req, res, next) => {
  try {
    const dataObject = Queue.shift();

    return res
      .status(dataObject ? 202 : 204)
      .json(
        dataObject
          ? { message: "Item removed successfully", data: dataObject }
          : []
      );
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

export default popController;
