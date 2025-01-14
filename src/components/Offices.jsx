import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Sefrou" invert={invert}>
          2 rue Lemqasem
          <br />
          31000, Sefrou, Morroco
        </Office>
      </li>
      <li>
        <Office name="Billund" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Cergy
        </Office>
      </li>
    </ul>
  )
}
