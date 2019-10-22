import { fillPreviewDriverFactory } from '../FillPreview/FillPreview.uni.driver';
import { dataHooks } from './constants';

export const swatchesDriverFactory = base => {
  const getSwatch = async index =>
    base.$$('[data-hook="color-swatches-swatch"]').get(index);

  return {
    exists: async () => base.exists(),

    /** Get swatch count */
    getSwatchCount: async () =>
      base.$$('[data-hook="color-swatches-swatch"]').count(),

    /** Get swatch at given index */
    getSwatch: async index => fillPreviewDriverFactory(await getSwatch(index)),

    /** Click empty swatch */
    clickEmptySwatch: async () =>
      fillPreviewDriverFactory(
        base.$(`[data-hook="${dataHooks.empty}"]`),
      ).click(),

    /** Test if swatch is selected at given index */
    isSwatchSelectedAt: async index => {
      return fillPreviewDriverFactory(await getSwatch(index)).isSelected();
    },

    addButtonExists: async () =>
      base.$$('[data-hook="color-preview-add-button"]').count() === 1,
  };
};
