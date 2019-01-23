import School from '../models/school';

/**
 * Save a school
 * @param req
 * @param res
 * @returns void
 */
export function addSchool(req, res) {
  if (!req.body || !req.body.length) {
    res.status(400)
      .end();
  }

  School.findOneAndUpdate({}, { $set: { schools: req.body } }, { new: true }, (err, doc) => {
    if (err) {
      res.status(500)
        .send(err);
    }

    if (doc) {
      return res.json(doc);
    }

    const newSchool = new School({
      schools: req.body,
    });

    return newSchool.save((err1, saved) => {
      if (err1) {
        return res.status(500)
          .send(err1);
      }

      return res.json(saved);
    });
  });
}
