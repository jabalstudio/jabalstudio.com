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

export function Contact({ dictionary, invert = false, ...props }) {

  return (
    <div
      className={clsx(
        'text-sm not-italic mt-6',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      {/* <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {dictionary.name}
      </strong>
      <br />
      {dictionary.role}
      <br />
      {dictionary.phone} */}
    </div>
  );
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Fez" invert={invert}>
          2 rue Lemsagem
          <br />
          30000 Fez, Morocco
        </Office>
      </li>
      <li>
        <Office name="Sefrou" invert={invert}>
          2 rue Lemqasem
          <br />
          31000 Sefrou, Morocco
        </Office>
      </li>
    </ul>
  )
}

