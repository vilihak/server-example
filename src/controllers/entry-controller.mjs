import {addEntry, findEntryById, listAllEntries} from "../models/entry-model.mjs";

const getEntries = (req, res) => {
  res.json(listAllEntries());
};

const getEntryById = (req, res) => {
  const entry = findEntryById(req.params.id);
  if (entry) {
    res.json(entry);
  } else {
    res.sendStatus(404);
  }
};

const postEntry = (req, res) => {
  const {user_id, entry_date, mood, weight, sleep_hours, notes} = req.body;
  // validate input, ensure required fields are present
  if (entry_date && (weight || mood || sleep_hours || notes) && user_id) {
    addEntry(req.body);
    res.status(201);
    res.json({message: 'New entry added.'})
  } else {
    res.sendStatus(400);
  }
};

const putEntry = (req, res) => {
  const {user_id, entry_date, mood, weight, sleep_hours, notes} = req.body;
  if (entry_date && (weight || mood || sleep_hours || notes) && user_id) {
    const updated = updateEntry(req.body);
    if (updated) {
      res.status(200);
      res.json({message: 'Entry updated.'});
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
};

const deleteEntry = (req, res) => {
  const {user_id, entry_date} = req.body;
  // validate input, ensure required fields are present
  if (entry_date && user_id) {
    const deleted = deleteEntry(req.body);
    if (deleted) {
      res.status(200);
      res.json({message: 'Entry deleted.'});
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
};
export {getEntries, getEntryById, postEntry, putEntry, deleteEntry};
