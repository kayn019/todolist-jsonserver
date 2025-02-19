'use client';
import { FormEventHandler, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid'

function AddTask(){
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  const router = useRouter()

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(newTaskValue);

    await addTodo({
      id: Number(uuidv4()),
      text: newTaskValue,
    });

    setNewTaskValue('');
    setModalOpen(false);
    router.refresh()
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 text-white'
      >
        Add new task <AiOutlinePlus className='ml-2' size={18} />{' '}
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-full '
            />
            <button type='submit' className='btn '>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
