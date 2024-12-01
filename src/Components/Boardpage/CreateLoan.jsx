import { Mydebts } from "../MyDebts/MyDebts"
import { MyLoans } from "../MyLoans/MyLoans"

export const CreateLoan = () => {
  return (
    <div className="flex space-x-4 mt-8">
      <Mydebts />
      <MyLoans />
    </div>
  )
}
