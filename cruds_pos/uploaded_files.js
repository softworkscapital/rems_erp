require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postUploadedFile = (
    company_id,
    department,
    origin_ref,
    resource_url,
    sync_date_time,
    sync_id
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO uploaded_files (
                company_id,
                department,
                origin_ref,
                resource_url,
                sync_date_time,
                sync_id
            ) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                company_id,
                department,
                origin_ref,
                resource_url,
                sync_date_time,
                sync_id
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: "200", message: "File uploaded successfully", result });
            }
        );
    });
};

crudsObj.getUploadedFiles = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uploaded_files', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getUploadedFileById = (uploaded_file_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM uploaded_files WHERE uploaded_file_id = ?', [uploaded_file_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.updateUploadedFile = (uploaded_file_id, updatedValues) => {
    const {
        company_id,
        department,
        origin_ref,
        resource_url,
        sync_date_time,
        sync_id
    } = updatedValues;

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE uploaded_files SET 
                company_id = ?, department = ?, origin_ref = ?, resource_url = ?, 
                sync_date_time = ?, sync_id = ? 
            WHERE uploaded_file_id = ?`,
            [
                company_id,
                department,
                origin_ref,
                resource_url,
                sync_date_time,
                sync_id,
                uploaded_file_id
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'File updated successfully' });
            }
        );
    });
};

crudsObj.deleteUploadedFile = (uploaded_file_id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM uploaded_files WHERE uploaded_file_id = ?', [uploaded_file_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve({ status: '200', message: 'File deleted successfully' });
        });
    });
};

module.exports = crudsObj;