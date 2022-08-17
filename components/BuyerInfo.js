import React from "react";

const BuyerInfo = ({ listPembeli }) => {
    return (
        <div>
            <div className="detail-title">
                <h1 className="text-sm md:text-xl pl-1">Buyer Information</h1>
            </div>
            <div className="flex justify-center py-6">
                <div>
                    {listPembeli.map(pembeli => {
                        return (
                            <>
                        <div className="buyer py-4">
                            <hr className="border bg-black"/>
                        </div>
                        <table className="text-xs md:text-sm mx-10">
                            <tbody>
                                <tr>
                                    <td className="text-right pr-8">Name :</td>
                                    <td>{pembeli.nama}</td>
                                </tr>
                                <tr>
                                    <td className="text-right pr-8">ID Line :</td>
                                    <td>{pembeli.idLine}</td>
                                </tr>
                                <tr>
                                    <td className="text-right pr-8">WhatsApp Number :</td>
                                    <td>{pembeli.nomorWA}</td>
                                </tr>
                                <tr>
                                    <td className="text-right pr-8">Email :</td>
                                    <td>{pembeli.email}</td>
                                </tr>
                                <tr>
                                    <td className="text-right pr-8">High School :</td>
                                    <td>{pembeli.highschool}</td>
                                </tr>
                            </tbody>
                        </table>
                        </>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default BuyerInfo;