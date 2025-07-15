import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const services = React.lazy(() => import('../pages/services'));
const team = React.lazy(() => import('../pages/team'));
const career = React.lazy(() => import('../pages/career'));
const jobapplication = React.lazy(() => import('../pages/job-application'));
const contact = React.lazy(() => import('../pages/contact'));
const digitalplatformcomponents = React.lazy(() => import('../pages/digital-platform-components'));
const digitalplatformoutcomes = React.lazy(() => import('../pages/digital-platform-outcomes'));
const tibco = React.lazy(() => import('../pages/solutions/tibco'));
const singlestore = React.lazy(() => import('../pages/solutions/singlestore'));
// const yellow = React.lazy(() => import('../pages/solutions/yellow-ai'));
const ibm = React.lazy(() => import('../pages/solutions/ibm'));
const nintex = React.lazy(() => import('../pages/solutions/nintex'));
const bct = React.lazy(() => import('../pages/solutions/bct'));
const akinon = React.lazy(() => import('../pages/solutions/akinon'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
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
        {
            path: 'solutions',
            children: [
                { path: 'tibco', element: <LoadComponent component={tibco} /> },
                { path: 'singlestore', element: <LoadComponent component={singlestore} /> },
                // { path: 'yellow-ai', element: <LoadComponent component={yellow} /> },
                { path: 'ibm', element: <LoadComponent component={ibm} /> },
                { path: 'nintex', element: <LoadComponent component={nintex} /> },
                { path: 'bct', element: <LoadComponent component={bct} /> },
                { path: 'akinon', element: <LoadComponent component={akinon} /> },
            ],
        },
        {
            path: '/contact',
            element: <LoadComponent component={contact} />
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
            path: '/digital-platform-outcomes',
            element: <LoadComponent component={digitalplatformoutcomes} />
        },
    ]);
};

export default AllRoutes;
