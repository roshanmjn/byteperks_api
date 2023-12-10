const ReportServices = require("./report.services.js");

// CREATE a new GetStarted Data
const createReport = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, webpage_url, report_description } = req.body;
        const reportData = await ReportServices.createReportSection({
            name,
            email,
            webpage_url,
            report_description,
        });
        res.status(201).json(reportData);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createReport,
};
