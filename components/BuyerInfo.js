import React from "react";

const BuyerInfo = ({ customer }) => {
    return (
        <div>
            <div className="detail-title">
                <h1 className="text-sm md:text-xl pl-1">Buyer Information</h1>
            </div>
            <div className="flex justify-center py-6">
                <table className="text-xs md:text-sm">
                    <tbody>
                        <tr>
                            <td className="text-right pr-8">Name :</td>
                            <td>{customer.name}</td>
                        </tr>
                        <tr>
                            <td className="text-right pr-8">ID Line :</td>
                            <td>{customer.lineId}</td>
                        </tr>
                        <tr>
                            <td className="text-right pr-8">WhatsApp Number :</td>
                            <td>{customer.number}</td>
                        </tr>
                        <tr>
                            <td className="text-right pr-8">Email :</td>
                            <td>{customer.email}</td>
                        </tr>
                        <tr>
                            <td className="text-right pr-8">High School :</td>
                            <td>{customer.highschool}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuyerInfo;