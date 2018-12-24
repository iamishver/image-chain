import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboards',
                title: 'Dashboards',
                translate: 'Dashboard',
                type: 'item',
                icon: 'dashboard',
                url: '/apps/dashboards/project'
            },
            {
                id: 'manage-access',
                title: 'Access List',
                translate: 'Access List',
                type: 'item',
                icon: 'cast',
                url: '/apps/access/access-list'
            },
            {
                id: 'encounters',
                title: 'Encounters',
                translate: 'Encounters',
                type: 'item',
                icon: 'rv_hookup',
                url: '/apps/appointments/appointments-list'
            },
            {
                id: 'Allergies',
                title: 'My Allergies',
                translate: 'My Allergies',
                type: 'item',
                icon: 'import_contacts',
                url: '/apps/allergy/allergy-list'
            },
            // {
            //     id: 'Manage Company',
            //     title: 'Manage Company',
            //     translate: 'NAV.DASHBOARDS',
            //     type: 'collapsable',
            //     icon: 'dashboard',
            //     children: [
            //         {
            //             id: 'analytics',
            //             title: 'Analytics',
            //             type: 'item',
            //             url: '/apps/manage-company'
            //         },
            //     ]
            // },
        ]
    },
];
