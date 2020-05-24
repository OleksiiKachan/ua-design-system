import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Button from '../';

const icons = {
  None: 'None',
  // 'Add (Add16 from `@carbon/icons-react`)': 'Add16',
  // 'Search (Search16 from `@carbon/icons-react`)': 'Search16',
};

// const iconMap = {
//   iconAddSolid,
//   iconSearch,
//   Add16,
//   Search16,
// };

const kinds = {
  'Blue button (blue)': 'blue',
};

const props = {
  regular: () => {
    // const iconToUse = iconMap[select('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      // kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      // renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },
  // iconOnly: () => {
  //   const iconToUse = iconMap[select('Icon (icon)', icons, 'Add16')];
  //   return {
  //     className: 'some-class',
  //     kind: select(
  //       'Button kind (kind)',
  //       {
  //         'Primary button (primary)': 'primary',
  //         'Secondary button (secondary)': 'secondary',
  //         'Tertiary button (tertiary)': 'tertiary',
  //         'Ghost button (ghost)': 'ghost',
  //       },
  //       'primary'
  //     ),
  //     disabled: boolean('Disabled (disabled)', false),
  //     size: select('Button size (size)', sizes, 'default'),
  //     renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
  //     iconDescription: text(
  //       'Icon description (iconDescription)',
  //       'Button icon'
  //     ),
  //     tooltipPosition: select(
  //       'Tooltip position (tooltipPosition)',
  //       ['top', 'right', 'bottom', 'left'],
  //       'bottom'
  //     ),
  //     tooltipAlignment: select(
  //       'Tooltip alignment (tooltipAlignment)',
  //       ['start', 'center', 'end'],
  //       'center'
  //     ),
  //     onClick: action('onClick'),
  //     onFocus: action('onFocus'),
  //   };
  // },
  // set: () => {
  //   const iconToUse = iconMap[select('Icon (icon)', icons, 'none')];
  //   return {
  //     className: 'some-class',
  //     disabled: boolean('Disabled (disabled)', false),
  //     size: select('Button size (size)', sizes, 'default'),
  //     renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
  //     iconDescription: text(
  //       'Icon description (iconDescription)',
  //       'Button icon'
  //     ),
  //     onClick: action('onClick'),
  //     onFocus: action('onFocus'),
  //   };
  // },
};

// const CustomLink = ({ children, href, ...other }) => (
//   <a href={href} {...other}>
//     {children}
//   </a>
// );

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Blue',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button.Blue {...regularProps} className="some-class">
            Button
          </Button.Blue>
          &nbsp;
          <Button.Blue {...regularProps} href="#" className="some-class">
            Link
          </Button.Blue>
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Blue button description
        `,
      },
    }
  )
  .add(
    'Yellow',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button.Yellow {...regularProps} className="some-class">
            Button
          </Button.Yellow>
          &nbsp;
          <Button.Yellow {...regularProps} href="#" className="some-class">
            Link
          </Button.Yellow>
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Yellow button description
        `,
      },
    }
  )
  .add(
    'Outline',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button.Outline {...regularProps} className="some-class">
            Button
          </Button.Outline>
          &nbsp;
          <Button.Outline {...regularProps} href="#" className="some-class">
            Link
          </Button.Outline>
        </div>
      );
    },
    {
      info: {
        text: `
          TODO. Outline button description
        `,
      },
    }
  );
// .add('Icon-only buttons', () => <Button {...props.iconOnly()} hasIconOnly />)
// .add(
//   'Sets of Buttons',
//   () => {
//     const setProps = props.set();
//     return (
//       <div className={`${prefix}--btn-set`}>
//         <Button kind="secondary" {...setProps}>
//           Secondary button
//         </Button>
//         <Button kind="primary" {...setProps}>
//           Primary button
//         </Button>
//       </div>
//     );
//   },
//   {
//     info: {
//       text: `
//         When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.
//       `,
//     },
//   }
// )
// .add(
//   'skeleton',
//   () => (
//     <div>
//       <ButtonSkeleton />
//       &nbsp;
//       <ButtonSkeleton href="#" />
//       &nbsp;
//       <ButtonSkeleton size="small" />
//     </div>
//   ),
//   {
//     info: {
//       text: `
//         Placeholder skeleton state to use when content is loading.
//       `,
//     },
//   }
// );
