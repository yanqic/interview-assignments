import config from './config';

import app from './app';
import { loadDataSource } from './utils';

const port = config.PORT || 3000;

(async () => {
    try {
        await loadDataSource();

        app.listen(port, () => {
            console.log(`Express server started on port: ${port}`);
        });
    } catch (err) {
        console.error(err);
        process.exit();
    }
})();
