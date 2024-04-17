import { useRef } from 'react';
import Input from '../../components/Input.tsx';
import Modal, { ModalRef } from '../../components/Modal.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { createProject } from '../../api/projects.ts';

function CreateProject() {
  const title = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement | null>(null);
  const dueDate = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<ModalRef | null>(null);
  const navigate = useNavigate();

  async function handleSave() {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;

    console.log(dueDate.current);

    if (
      enteredTitle?.trim() &&
      enteredDescription?.trim() &&
      enteredDueDate?.trim()
    ) {
      try {
        const response = await createProject({
          title: enteredTitle,
          description: enteredDescription,
          dueDate: enteredDueDate,
        });

        console.log('response', response);
        navigate('/projects/' + response.data.projectId);
      } catch (e: any) {
        alert(e);
      }
    } else {
      modalRef.current?.openModal();
    }
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">Enter valid inputs</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Link to="/">
              <button className="text-stone-800 hover:text-stone-950">
                Cancel
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea={true} />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}

export default CreateProject;
