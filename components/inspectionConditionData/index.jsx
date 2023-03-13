import React from 'react';
import { Table, Form } from 'react-bootstrap';
import OutlineDropdown from '../common/buttons/OutlineDropdown';
import styles from './style.module.scss';

function InspectionConditionData() {
  return (
    <div className={styles.inspectionData}>
      <Table className={styles.inspectionDataTable} responsive>
        <tbody>
          <tr>
            <td className={styles.dataTitle}>Part</td>
            <td className={styles.dataTitle}>Condition</td>
            <td className={styles.dataTitle}>Issue (if any)</td>
          </tr>
          <tr>
            <td className={styles.dataHeading}>Front Mudguard</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Good"
                  options={['Good', 'Good', 'Good']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Write issue" />
                </Form.Group>
              </Form>
            </td>
          </tr>
          <tr>
            <td className={styles.dataHeading}>Rear Mudguard</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Broken/Scratched"
                  options={[
                    'Broken/Scratched',
                    'Broken/Scratched',
                    'Broken/Scratched',
                  ]}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Slightly broken" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Leg Guard</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Perfect"
                  options={['Perfect', 'Perfect', 'Perfect']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Write issue" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Headlights</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Perfect"
                  options={['Perfect', 'Perfect', 'Perfect']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Write issue" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Side Mirrors</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Perfect"
                  options={['Good', 'Good', 'Good']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Write issue" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Seat</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Good"
                  options={['Good', 'Good', 'Good']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Write issue" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Tail lamp</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Broken/Scratched"
                  options={[
                    'Broken/Scratched',
                    'Broken/Scratched',
                    'Broken/Scratched',
                  ]}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Slightly broken" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Front Indicators</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Broken/Scratched"
                  options={[
                    'Broken/Scratched',
                    'Broken/Scratched',
                    'Broken/Scratched',
                  ]}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Slightly broken" />
                </Form.Group>
              </Form>
            </td>
          </tr>

          <tr>
            <td className={styles.dataHeading}>Silencer</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Perfect"
                  options={['Perfect', 'Perfect', 'Perfect']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Slightly broken" />
                </Form.Group>
              </Form>
            </td>
          </tr>
          <tr>
            <td className={styles.dataHeading}>Rear Indicators</td>
            <td>
              <div className={styles.tableDropdownBtn}>
                <OutlineDropdown
                  dropdownTitle="Good"
                  options={['Good', 'Good', 'Good']}
                />
              </div>
            </td>
            <td>
              {' '}
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Slightly broken" />
                </Form.Group>
              </Form>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default InspectionConditionData;
