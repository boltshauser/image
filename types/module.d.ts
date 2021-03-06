import { Module } from '@nuxt/types'
import { ImagePreset } from './runtime'

export interface ModuleOptions {
  provider: string;
  presets: ImagePreset[];
  ipx: {
    dir?: string;
    clearCache?: boolean | string;
    cacheDir?: string;
    sharp: {
      [key: string]: any;
    }
  }
  sizes: number[],
  internalUrl?: string
  providers: {
    [name: string]: any;
  }
  intersectOptions: object;
}

export const imageModule: Module<ModuleOptions>
