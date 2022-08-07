import React from "react"

export default function OrderDetails() {
    return (
        <div className="px-6 md:px-14 py-5 mx-auto">
            <div className="flex justify-between">
                <div className="font-bold text-purple flex divide-x-2">
                    <div className="px-2.5">
                        <h3 className="float-left">All</h3>
                        <span className="badge">1200</span>
                    </div>
                    <div className="px-2.5">
                        <h3 className="float-left">Received</h3>
                        <span className="badge">1200</span>
                    </div>
                    <div className="px-2.5">
                        <h3 className="float-left">Paid</h3>
                        <span className="badge">1200</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  