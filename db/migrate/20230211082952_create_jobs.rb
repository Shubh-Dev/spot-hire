class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :photo
      t.string :company_name
      t.text :company_description
      t.integer :employees
      t.string :job_title
      t.string :skills
      t.string :salary

      t.timestamps
    end
  end
end
