const express = require('express');
const uploadedFilesRouter = express.Router();
const uploadedFilesDbOperations = require('../cruds_pos/uploaded_files');

uploadedFilesRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            company_id,
            department,
            origin_ref,
            resource_url,
            sync_date_time,
            sync_id
        } = postedValues;

        let results = await uploadedFilesDbOperations.postUploadedFile(
            company_id,
            department,
            origin_ref,
            resource_url,
            sync_date_time,
            sync_id
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

uploadedFilesRouter.get('/', async (req, res, next) => {
    try {
        let results = await uploadedFilesDbOperations.getUploadedFiles();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

uploadedFilesRouter.get('/:id', async (req, res, next) => {
    try {
        let uploaded_file_id = req.params.id;
        let result = await uploadedFilesDbOperations.getUploadedFileById(uploaded_file_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

uploadedFilesRouter.put('/:id', async (req, res, next) => {
    try {
        let uploaded_file_id = req.params.id;
        let updatedValues = req.body;

        let results = await uploadedFilesDbOperations.updateUploadedFile(uploaded_file_id, updatedValues);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

uploadedFilesRouter.delete('/:id', async (req, res, next) => {
    try {
        let uploaded_file_id = req.params.id;
        let result = await uploadedFilesDbOperations.deleteUploadedFile(uploaded_file_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = uploadedFilesRouter;