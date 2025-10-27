// Updated AllRoutes component - ensure the import is added
import React, { Suspense, ComponentType } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const services = React.lazy(() => import('../pages/services'));
const team = React.lazy(() => import('../pages/team'));
const career = React.lazy(() => import('../pages/career'));
const jobapplication = React.lazy(() => import('../pages/job-application'));
const contact = React.lazy(() => import('../pages/contact'));
const digitalplatformcomponents = React.lazy(() => import('../pages/digital-platform-components'));
const digitalplatformoutcomes = React.lazy(() => import('../pages/Industries'));
const bfsiCase = React.lazy(() => import('../pages/Industries/bfsi'));
const transportLogisticsCase = React.lazy(() => import('../pages/Industries/transportlogistics'));
const healthcareCase = React.lazy(() => import('../pages/Industries/healthcare'));
const retailEcommerceCase = React.lazy(() => import('../pages/Industries/retailecommerce'));
const enterpriseDeliveryCase = React.lazy(() => import('../pages/Industries/enterprisedelivery'));
const realTimeOrderStream = React.lazy(() => import('../pages/team/real-time-order-stream'));
const reimaginingloanorigination = React.lazy(() => import('../pages/team/reimagining-loan-origination'));

const RegulatoryReportingAutomation = React.lazy(() => import('../pages/team/Regulatory-Reporting-Automation'));
const PredictiveFreightIntelligence = React.lazy(() => import('../pages/team/Predictive-Freight-Intelligence'));

// const tibco = React.lazy(() => import('../pages/solutions/tibco'));
// const singlestore = React.lazy(() => import('../pages/solutions/singlestore'));
// // const yellow = React.lazy(() => import('../pages/solutions/yellow-ai'));
// const ibm = React.lazy(() => import('../pages/solutions/ibm'));
// const nintex = React.lazy(() => import('../pages/solutions/nintex'));
// const bct = React.lazy(() => import('../pages/solutions/bct'));
// const akinon = React.lazy(() => import('../pages/solutions/akinon'));

const loading = () => <div className="loading">Loading...</div>; // Added a simple loading component

type LoadComponentProps = {
    component: React.LazyExoticComponent<ComponentType>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <LoadComponent component={Home} />
        },
        {
            path: '/services',
            element: <LoadComponent component={services} />
        },
       
        // {
        //     path: 'solutions',
        //     children: [
        //         { path: 'tibco', element: <LoadComponent component={tibco} /> },
        //         { path: 'singlestore', element: <LoadComponent component={singlestore} /> },
        //         // { path: 'yellow-ai', element: <LoadComponent component={yellow} /> },
        //         { path: 'ibm', element: <LoadComponent component={ibm} /> },
        //         { path: 'nintex', element: <LoadComponent component={nintex} /> },
        //         { path: 'bct', element: <LoadComponent component={bct} /> },
        //         { path: 'akinon', element: <LoadComponent component={akinon} /> },
        //     ],
        // },
        {
            path: '/contact',
            element: <LoadComponent component={contact} />
        },
       
       {
            path: '/case-studies/bfsi',
            element: <LoadComponent component={bfsiCase} />
        },
        {
            path: '/case-studies/transportlogistics',
            element: <LoadComponent component={transportLogisticsCase} />
        },
        {
            path: '/case-studies/healthcare',
            element: <LoadComponent component={healthcareCase} />
        },
        {
            path: '/case-studies/retailecommerce',
            element: <LoadComponent component={retailEcommerceCase} />
        },
        {
            path: '/case-studies/enterprisedelivery',
            element: <LoadComponent component={enterpriseDeliveryCase} />
        },
        {
            path: '/real-time-order-stream',
            element: <LoadComponent component={realTimeOrderStream} />
        },
       {
            path: '/reimagining-loan-origination',
            element: <LoadComponent component={reimaginingloanorigination} />
        },
        {
            path: '/Predictive-Freight-Intelligence',
            element: <LoadComponent component={PredictiveFreightIntelligence} />
        },
        {
            path: '/Regulatory-Reporting-Automation',
            element: <LoadComponent component={RegulatoryReportingAutomation} />
        },
        {
            path: '/team',
            element: <LoadComponent component={team} />
        },
        {
            path: '/career',
            element: <LoadComponent component={career} />
        },
        {
            path: "/job-application/:job_id",
            element: <LoadComponent component={jobapplication} />
        },
        {
            path: '/digital-platform-components',
            element: <LoadComponent component={digitalplatformcomponents} />
        },
        {
            path: '/Industries',
            element: <LoadComponent component={digitalplatformoutcomes} />
        },
    ]);
};

export default AllRoutes;