import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

import { error } from '@pnotify/core';

defaults.styling = "аngeler";

error ({
    title: 'Oh No!',
    text: 'Something terrible happened. Try again!',
  })

export default error;