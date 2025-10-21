 import officeImage1 from 'assets/images/contact/lahore.png';
import officeImage2 from 'assets/images/contact/dubai1.jpg';
import { Office } from './types';

const offices: Office[] = [
    {
        image: officeImage1,
        title: 'Lahore Office',
        address: 'Office 509, Haly Tower, DHA Phase 2, Lahore, Pakistan',
        phone: '+92 42 32020590',
    },
    {
        image: officeImage2,
        title: 'Dubai Office',
        address: 'Office 1701, The Binary, Al Abraj Street, Business Bay, Dubai, United Arab Emirates',
        phone: '+971 4 551 4344',
    }
]

export { offices };