import {
    RatingItem,
    RatingItemOptions,
    ratingItemTemplate as template,
} from "@microsoft/fast-foundation";
import { ratingItemStyles as styles } from "./rating-item.styles";

/**
 * A function that returns a {@link @microsoft/fast-foundation#RatingItem} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#ratingItemTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: <fast-rating-item>
 */
export const fastRatingItem = RatingItem.compose<RatingItemOptions>({
    baseName: "rating-item",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
    emptyIcon: `
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.1939 2.1013C7.52403 1.43238 8.47789 1.43238 8.80802 2.1013L10.3291 5.18335L13.7304 5.67758C14.4685 5.78485 14.7633 6.69202 14.2291 7.21271L11.768 9.61175L12.349 12.9993C12.4751 13.7345 11.7034 14.2951 11.0431 13.948L8.00096 12.3487L4.95879 13.948C4.29853 14.2951 3.52684 13.7345 3.65294 12.9993L4.23394 9.61175L1.77277 7.21271C1.23861 6.69203 1.53336 5.78485 2.27156 5.67758L5.67281 5.18335L7.1939 2.1013ZM8.00096 2.72556L6.54628 5.67306C6.41519 5.93869 6.16178 6.1228 5.86864 6.1654L2.61588 6.63805L4.9696 8.93236C5.18171 9.13913 5.27851 9.43703 5.22843 9.72898L4.6728 12.9686L7.58215 11.4391C7.84434 11.3012 8.15758 11.3012 8.41977 11.4391L11.3291 12.9686L10.7735 9.72898C10.7234 9.43702 10.8202 9.13912 11.0323 8.93236L13.386 6.63805L10.1333 6.1654C9.84014 6.1228 9.58673 5.93869 9.45564 5.67306L8.00096 2.72556Z"/>
        </svg>
    `,
    filledIcon: `
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.1939 2.1013C7.52403 1.43238 8.47789 1.43238 8.80802 2.1013L10.3291 5.18335L13.7304 5.67758C14.4685 5.78485 14.7633 6.69202 14.2291 7.21271L11.768 9.61175L12.349 12.9993C12.4751 13.7345 11.7034 14.2951 11.0431 13.948L8.00096 12.3487L4.95879 13.948C4.29853 14.2951 3.52684 13.7345 3.65294 12.9993L4.23394 9.61175L1.77277 7.21271C1.23861 6.69203 1.53336 5.78485 2.27156 5.67758L5.67281 5.18335L7.1939 2.1013Z"/>
        </svg>
    `,
});

/**
 * Base class for Rating
 * @public
 */
export { RatingItem };