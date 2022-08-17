import React, { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

const PopupDelete = ({checkedList}) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    
    function openModal() {
        setIsOpen(true)
    }

    function handleDelete() {
        
    }

    return (
        <>
            <button className="btn-small border-none rounded-2xl md:rounded-xl font-semibold md:font-medium flex items-center space-x-1 md:space-x-2 px-2 pr-2.5 md:px-3" onClick={openModal}>
                <img src="/assets/delete.svg" alt="" className="h-3 md:h-4" /><p>Delete</p>
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="max-w-md transform overflow-hidden rounded-3xl bg-white py-6 px-10 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h1"
                            className="text-2xl font-bold leading-6 text-center"
                        >
                            Delete Order
                        </Dialog.Title>
                        <div className="mt-3">
                            {checkedList.length > 0? 
                            <p className="text-sm text-center">There will be {checkedList.length} orders deleted, you sure?</p>:
                            <p className="text-sm text-center">No order selected, select first</p>
                            }
                        </div>
                        <div className="mt-5 space-x-3 text-center">
                            {checkedList.length > 0? <>
                            <button
                            type="button"
                            className="rounded-md bg-modal-gray font-bold px-4 py-3 text-xs hover:bg-blue-200"
                            onClick={closeModal}
                            >
                            Cancel
                            </button>
                            <button
                            type="button"
                            className="rounded-md bg-modal-red text-white px-4 py-3 text-xs font-bold hover:bg-blue-200"
                            onClick={handleDelete}
                            >
                            Yes, Delete
                            </button>
                            </>
                            :
                            <button
                            type="button"
                            className="rounded-md bg-modal-gray font-bold px-4 py-3 text-xs hover:bg-blue-200"
                            onClick={closeModal}
                            >
                            OK
                            </button>}
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default PopupDelete;