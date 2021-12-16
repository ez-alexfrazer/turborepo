import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import Head from 'next/head';
import { Button, Input } from "ui";
import clsx from 'clsx';

export default function Web() {
  const [value, setValue] = useState('');
  const submitCount = useRef(0);
  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value);
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitCount.current += 1;
    setValue('');
  };
  return (
    <div className={clsx('min-h-screen', 'w-screen')}>
      <Head>
        <title>Some form</title>
      </Head>
      <div className={clsx('flex', 'justify-center')}>
        <form className={clsx('flex', 'flex-col', 'gap-4')} onSubmit={onSubmit} aria-labelledby="title">
          <h2 className="text-2xl font-semibold" id="title">Form Title</h2>
          <Input value={value} onChange={onChange} />
          <Button disabled={!value} type="submit">Click this button</Button>
          <span>Submitted {submitCount.current} times</span>
        </form>
      </div>
    </div>
  );
}
