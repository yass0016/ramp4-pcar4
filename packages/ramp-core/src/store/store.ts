import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import cloneDeep from 'clone-deep';

import { fixtures } from './modules/fixtures';
import { legend } from '@/store/modules/legend';
import { config } from '@/store/modules/config';
import { RootState } from '@/store/state';

Vue.use(Vuex);

export const createStore = () =>
    new Vuex.Store<RootState>({
        plugins: [pathify.plugin],
        modules: {
            fixtures: cloneDeep(fixtures),
            config: cloneDeep(config),
            legend: cloneDeep(legend)
        }
    });

declare module 'vuex' {
    // Declare augmentation for Vuex store for Pathify
    interface Store<S> {
        set: <T>(path: string, value: any) => Promise<T> | undefined;
        get: <T>(path: string, ...args: any) => T | undefined;
        copy: <T>(path: string, ...args: any) => T | undefined;
    }
}
