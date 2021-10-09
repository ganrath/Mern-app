import mongoose from 'mongoose';

const opts = { toJSON: { virtuals: true } };

const EmployeeSchema = mongoose.Schema({ 
      firstName: String,
      lastName: String,
      designation: String,
}, opts);

EmployeeSchema.virtual('FullName').get(function(){
    return `${this.firstName} ${this.lastName}`;
});

const Employee = mongoose.model('Employee', EmployeeSchema)

export default Employee;